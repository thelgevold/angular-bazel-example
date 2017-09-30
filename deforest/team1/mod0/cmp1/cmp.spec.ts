
import { Cmp3101Component } from './cmp';
describe('Cmp3101Component', () => {
  it('should add', () => {
    expect(new Cmp3101Component().add3101(1)).toBe(3102);
  });
});