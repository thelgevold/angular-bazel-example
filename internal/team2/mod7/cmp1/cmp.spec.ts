
import { Cmp8271Component } from './cmp';
describe('Cmp8271Component', () => {
  it('should add', () => {
    expect(new Cmp8271Component().add8271(1)).toBe(8272);
  });
});