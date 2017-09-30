
import { Cmp6565Component } from './cmp';
describe('Cmp6565Component', () => {
  it('should add', () => {
    expect(new Cmp6565Component().add6565(1)).toBe(6566);
  });
});