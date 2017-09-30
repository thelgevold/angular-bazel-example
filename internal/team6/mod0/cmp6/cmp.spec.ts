
import { Cmp8606Component } from './cmp';
describe('Cmp8606Component', () => {
  it('should add', () => {
    expect(new Cmp8606Component().add8606(1)).toBe(8607);
  });
});