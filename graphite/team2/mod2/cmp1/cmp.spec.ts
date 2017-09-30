
import { Cmp6221Component } from './cmp';
describe('Cmp6221Component', () => {
  it('should add', () => {
    expect(new Cmp6221Component().add6221(1)).toBe(6222);
  });
});