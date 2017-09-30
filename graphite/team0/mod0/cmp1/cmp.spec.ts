
import { Cmp6001Component } from './cmp';
describe('Cmp6001Component', () => {
  it('should add', () => {
    expect(new Cmp6001Component().add6001(1)).toBe(6002);
  });
});