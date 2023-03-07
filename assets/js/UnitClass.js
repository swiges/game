export default class Unit {
  constructor(id, name, ally, level, initiative, role, race, health, damage) {
    this.id = id
    this.name = name
    this.ally = ally
    this.level = level
    this.initiative = initiative
    this.role = role
    this.race = race
    this._currentHealth = health
    this._maxHealth = health
    this.damage = damage
  }

  getDamage(damage) {
    if (this._currentHealth - damage < 0) {
      this._currentHealth = 0
    } else {
      this._currentHealth = this._currentHealth - damage
    }
  }
}
