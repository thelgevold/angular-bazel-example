
import { Cmp6067Component } from './cmp';
describe('Cmp6067Component', () => {
  it('should add', () => {
    expect(new Cmp6067Component().add6067(1)).toBe(6068);
  });
});