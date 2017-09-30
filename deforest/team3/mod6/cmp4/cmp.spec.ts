
import { Cmp3364Component } from './cmp';
describe('Cmp3364Component', () => {
  it('should add', () => {
    expect(new Cmp3364Component().add3364(1)).toBe(3365);
  });
});