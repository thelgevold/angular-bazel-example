
import { Cmp7565Component } from './cmp';
describe('Cmp7565Component', () => {
  it('should add', () => {
    expect(new Cmp7565Component().add7565(1)).toBe(7566);
  });
});