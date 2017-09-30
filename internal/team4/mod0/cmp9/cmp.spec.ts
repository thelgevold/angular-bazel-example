
import { Cmp8409Component } from './cmp';
describe('Cmp8409Component', () => {
  it('should add', () => {
    expect(new Cmp8409Component().add8409(1)).toBe(8410);
  });
});