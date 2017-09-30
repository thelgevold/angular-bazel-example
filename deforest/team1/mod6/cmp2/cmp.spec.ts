
import { Cmp3162Component } from './cmp';
describe('Cmp3162Component', () => {
  it('should add', () => {
    expect(new Cmp3162Component().add3162(1)).toBe(3163);
  });
});