
import { Cmp5820Component } from './cmp';
describe('Cmp5820Component', () => {
  it('should add', () => {
    expect(new Cmp5820Component().add5820(1)).toBe(5821);
  });
});