
import { Cmp6932Component } from './cmp';
describe('Cmp6932Component', () => {
  it('should add', () => {
    expect(new Cmp6932Component().add6932(1)).toBe(6933);
  });
});