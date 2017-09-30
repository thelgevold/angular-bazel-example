
import { Cmp6978Component } from './cmp';
describe('Cmp6978Component', () => {
  it('should add', () => {
    expect(new Cmp6978Component().add6978(1)).toBe(6979);
  });
});