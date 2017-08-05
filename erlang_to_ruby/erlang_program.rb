class ErlangProgram

    def self.format_weight(list_of_objects)

    end

    private

    def self.convert_list_to_k(list_of_objects)
        for i in 0...list_of_objects.count
            # if check_for_name(list_of_objects[i])

        end
        while count < list_of_objects.length do
            input = list_of_objects[count]
            if count == 0 and input.is_a?(String)
            end
            count += 1
        end
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
end
