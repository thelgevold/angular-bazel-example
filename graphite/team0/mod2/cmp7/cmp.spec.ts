
import { Cmp6027Component } from './cmp';
describe('Cmp6027Component', () => {
  it('should add', () => {
    expect(new Cmp6027Component().add6027(1)).toBe(6028);
  });
});