
import { Cmp6887Component } from './cmp';
describe('Cmp6887Component', () => {
  it('should add', () => {
    expect(new Cmp6887Component().add6887(1)).toBe(6888);
  });
});