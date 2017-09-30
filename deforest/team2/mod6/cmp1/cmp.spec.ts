
import { Cmp3261Component } from './cmp';
describe('Cmp3261Component', () => {
  it('should add', () => {
    expect(new Cmp3261Component().add3261(1)).toBe(3262);
  });
});