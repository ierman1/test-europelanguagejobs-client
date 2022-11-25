import Api from "@/Api";

function Breed(id, name) {
    this.id = id;
    this.name = name;
}

Breed.fromObject = (object) => {
    if (object)
        return new Breed(object.id, object.name);

    return null;
}

Breed.fetch = () => {
    return Api.fetch('/breeds')
        .then((response) => response.json());
}

export default Breed;