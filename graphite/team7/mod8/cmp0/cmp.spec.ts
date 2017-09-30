
import { Cmp6780Component } from './cmp';
describe('Cmp6780Component', () => {
  it('should add', () => {
    expect(new Cmp6780Component().add6780(1)).toBe(6781);
  });
});