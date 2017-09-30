
import { Cmp6555Component } from './cmp';
describe('Cmp6555Component', () => {
  it('should add', () => {
    expect(new Cmp6555Component().add6555(1)).toBe(6556);
  });
});