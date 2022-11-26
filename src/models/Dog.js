import Breed from "@/models/Breed";
import Api from "@/Api";

function Dog(id, breed, name, hairColor, size) {
    this.id = id;
    this.breed = Breed.fromObject(breed);
    this.name = name;
    this.hairColor = hairColor;
    this.size = size;
}

Dog.fromObject = (object) => {
    if (object)
        return new Dog(object.id, object.breed, object.name, object.hair_color, object.size);

    return null;
}

Dog.create = (breedId, name, hairColor, size) => {
    const data = new FormData();

    data.append('breed_id', breedId);
    data.append('name', name);
    data.append('hair_color', hairColor);
    data.append('size', size);

    return Api.fetch('/dogs', data, 'post')
}

Dog.fetch = () => {
    return Api.fetch('/dogs');
}

Dog.find = (id) => {
    return Api.fetch('/dogs/' + id);
}

export default Dog;