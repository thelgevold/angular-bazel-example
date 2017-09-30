
import { Cmp6834Component } from './cmp';
describe('Cmp6834Component', () => {
  it('should add', () => {
    expect(new Cmp6834Component().add6834(1)).toBe(6835);
  });
});