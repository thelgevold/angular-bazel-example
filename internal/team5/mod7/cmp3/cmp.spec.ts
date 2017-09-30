
import { Cmp8573Component } from './cmp';
describe('Cmp8573Component', () => {
  it('should add', () => {
    expect(new Cmp8573Component().add8573(1)).toBe(8574);
  });
});