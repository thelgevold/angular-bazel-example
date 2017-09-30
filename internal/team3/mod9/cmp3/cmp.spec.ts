
import { Cmp8393Component } from './cmp';
describe('Cmp8393Component', () => {
  it('should add', () => {
    expect(new Cmp8393Component().add8393(1)).toBe(8394);
  });
});