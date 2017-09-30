
import { Cmp5602Component } from './cmp';
describe('Cmp5602Component', () => {
  it('should add', () => {
    expect(new Cmp5602Component().add5602(1)).toBe(5603);
  });
});