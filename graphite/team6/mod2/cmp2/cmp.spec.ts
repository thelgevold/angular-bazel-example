
import { Cmp6622Component } from './cmp';
describe('Cmp6622Component', () => {
  it('should add', () => {
    expect(new Cmp6622Component().add6622(1)).toBe(6623);
  });
});