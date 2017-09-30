
import { Cmp5600Component } from './cmp';
describe('Cmp5600Component', () => {
  it('should add', () => {
    expect(new Cmp5600Component().add5600(1)).toBe(5601);
  });
});