
import { Cmp6881Component } from './cmp';
describe('Cmp6881Component', () => {
  it('should add', () => {
    expect(new Cmp6881Component().add6881(1)).toBe(6882);
  });
});