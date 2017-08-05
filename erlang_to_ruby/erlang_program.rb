class ErlangProgram

    def self.format_weight(list_of_objects)
        converted_list = convert_list_to_k(list_of_objects)
    end

    private

    def self.convert_list_to_k(list_of_objects)
        dup = deep_dup(list_of_objects)
        FACTOR = 0.45359237
        for i in 0...dup.count
            h = dup[i]
            if check_for_name(h)
                get_weight(h) = get_weight(h) / FACTOR
            end
        end
        dup
    end

    def self.print_weight(hash)
        name = hash.keys[0]
        weight = get_weight(hash)
        printf("%-15s %f c\n", name, weight)
    end

    def self.check_for_name(object)
        if !object.keys[0].is_a?(String)
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
        hash.each |k,v| do
            dup[k] = deep_dup(v)
        end
        dup
    end

    def self.get_weight(hash)
        hash[hash.keys[0]]
    end
end
