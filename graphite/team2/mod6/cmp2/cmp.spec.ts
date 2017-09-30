
import { Cmp6262Component } from './cmp';
describe('Cmp6262Component', () => {
  it('should add', () => {
    expect(new Cmp6262Component().add6262(1)).toBe(6263);
  });
});