
import { Cmp6293Component } from './cmp';
describe('Cmp6293Component', () => {
  it('should add', () => {
    expect(new Cmp6293Component().add6293(1)).toBe(6294);
  });
});