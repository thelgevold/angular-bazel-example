
import { Cmp6232Component } from './cmp';
describe('Cmp6232Component', () => {
  it('should add', () => {
    expect(new Cmp6232Component().add6232(1)).toBe(6233);
  });
});