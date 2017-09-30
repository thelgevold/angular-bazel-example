
import { Cmp6504Component } from './cmp';
describe('Cmp6504Component', () => {
  it('should add', () => {
    expect(new Cmp6504Component().add6504(1)).toBe(6505);
  });
});