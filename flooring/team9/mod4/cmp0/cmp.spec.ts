
import { Cmp5940Component } from './cmp';
describe('Cmp5940Component', () => {
  it('should add', () => {
    expect(new Cmp5940Component().add5940(1)).toBe(5941);
  });
});