
import { Cmp4603Component } from './cmp';
describe('Cmp4603Component', () => {
  it('should add', () => {
    expect(new Cmp4603Component().add4603(1)).toBe(4604);
  });
});