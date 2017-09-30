
import { Cmp3063Component } from './cmp';
describe('Cmp3063Component', () => {
  it('should add', () => {
    expect(new Cmp3063Component().add3063(1)).toBe(3064);
  });
});