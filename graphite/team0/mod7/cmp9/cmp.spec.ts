
import { Cmp6079Component } from './cmp';
describe('Cmp6079Component', () => {
  it('should add', () => {
    expect(new Cmp6079Component().add6079(1)).toBe(6080);
  });
});