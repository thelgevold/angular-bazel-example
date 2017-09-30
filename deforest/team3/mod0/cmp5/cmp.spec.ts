
import { Cmp3305Component } from './cmp';
describe('Cmp3305Component', () => {
  it('should add', () => {
    expect(new Cmp3305Component().add3305(1)).toBe(3306);
  });
});