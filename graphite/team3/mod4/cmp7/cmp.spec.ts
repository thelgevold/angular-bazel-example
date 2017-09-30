
import { Cmp6347Component } from './cmp';
describe('Cmp6347Component', () => {
  it('should add', () => {
    expect(new Cmp6347Component().add6347(1)).toBe(6348);
  });
});