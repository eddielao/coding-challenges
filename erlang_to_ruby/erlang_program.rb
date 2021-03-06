require 'byebug'

class ErlangProgram
    $FACTOR = 0.45359237

    # Only API
    def self.format_weight(list_of_objects)
        converted_list = convert_list_to_k(list_of_objects)
        for i in 0...converted_list.count
            print_weight(converted_list[i])
        end
        min_and_max(converted_list)
    end

    private
    # Rest of methods are kept private per original Erlang program
    def self.convert_list_to_k(list_of_objects)
        dup = deep_dup(list_of_objects)
        for i in 0...dup.count
            h = dup[i]
            if check_for_name(h)
                h[h.keys[0]][h[h.keys[0]].keys[0]] =
                    h[h.keys[0]][h[h.keys[0]].keys[0]] / $FACTOR
            end
        end
        dup
    end

    def self.min_and_max(list)
        min_idx = 0;
        min = get_weight(list[0])
        max_idx = 0;
        max = min;
        for i in 1...list.count
            w = get_weight(list[i])
            if w > max
                max = w
                max_idx = i
            elsif w < min
                min = w
                min_idx = i
            end
        end

        max_name = list[max_idx].keys[0]
        min_name = list[min_idx].keys[0]
        printf("Max weight was %f c in %s\n", max, max_name)
        printf("Min weight was %f c in %s", min, min_name)
    end

    def self.print_weight(hash)
        # debugger
        name = hash.keys[0]
        weight = get_weight(hash)
        printf("%-15s %f c\n", name, weight)
    end

    def self.check_for_name(object)
        if !object.is_a?(Hash)
            raise 'Input must be hash'
        elsif !object.keys[0].is_a?(String)
            raise 'Each object must have a name'
        elsif object.values[0].keys[0] != 'l'
            raise "Use 'l' to specify result in lb"
        else
            return true
        end
    end

    def self.deep_dup(hash)
        return hash if !hash.is_a?(Hash)
        dup = {}
        hash.each {|k,v|
            dup[k] = deep_dup(v)
        }
        dup
    end

    def self.get_weight(hash)
        hash[hash.keys[0]][hash[hash.keys[0]].keys[0]]
    end
end
