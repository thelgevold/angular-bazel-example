
import { Cmp3219Component } from './cmp';
describe('Cmp3219Component', () => {
  it('should add', () => {
    expect(new Cmp3219Component().add3219(1)).toBe(3220);
  });
});