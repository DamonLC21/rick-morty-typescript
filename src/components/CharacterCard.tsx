import React from 'react'
import {Character} from '../types'

interface CharacterCardProps {
    character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({character}) => {
    return (
        <h2>{character.name}</h2>
    )
}

export default CharacterCard