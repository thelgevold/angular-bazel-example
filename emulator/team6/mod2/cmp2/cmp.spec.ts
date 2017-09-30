
import { Cmp4622Component } from './cmp';
describe('Cmp4622Component', () => {
  it('should add', () => {
    expect(new Cmp4622Component().add4622(1)).toBe(4623);
  });
});