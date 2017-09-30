
import { Cmp9606Component } from './cmp';
describe('Cmp9606Component', () => {
  it('should add', () => {
    expect(new Cmp9606Component().add9606(1)).toBe(9607);
  });
});