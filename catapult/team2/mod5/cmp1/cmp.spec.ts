
import { Cmp2251Component } from './cmp';
describe('Cmp2251Component', () => {
  it('should add', () => {
    expect(new Cmp2251Component().add2251(1)).toBe(2252);
  });
});