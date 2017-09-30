
import { Cmp5192Component } from './cmp';
describe('Cmp5192Component', () => {
  it('should add', () => {
    expect(new Cmp5192Component().add5192(1)).toBe(5193);
  });
});