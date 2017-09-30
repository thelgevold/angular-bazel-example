
import { Cmp6975Component } from './cmp';
describe('Cmp6975Component', () => {
  it('should add', () => {
    expect(new Cmp6975Component().add6975(1)).toBe(6976);
  });
});