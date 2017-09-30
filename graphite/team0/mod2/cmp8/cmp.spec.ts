
import { Cmp6028Component } from './cmp';
describe('Cmp6028Component', () => {
  it('should add', () => {
    expect(new Cmp6028Component().add6028(1)).toBe(6029);
  });
});