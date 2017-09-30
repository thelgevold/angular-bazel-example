
import { Cmp6807Component } from './cmp';
describe('Cmp6807Component', () => {
  it('should add', () => {
    expect(new Cmp6807Component().add6807(1)).toBe(6808);
  });
});