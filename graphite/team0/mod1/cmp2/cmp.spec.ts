
import { Cmp6012Component } from './cmp';
describe('Cmp6012Component', () => {
  it('should add', () => {
    expect(new Cmp6012Component().add6012(1)).toBe(6013);
  });
});