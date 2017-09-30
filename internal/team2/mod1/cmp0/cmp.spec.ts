
import { Cmp8210Component } from './cmp';
describe('Cmp8210Component', () => {
  it('should add', () => {
    expect(new Cmp8210Component().add8210(1)).toBe(8211);
  });
});