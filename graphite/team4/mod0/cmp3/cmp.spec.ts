
import { Cmp6403Component } from './cmp';
describe('Cmp6403Component', () => {
  it('should add', () => {
    expect(new Cmp6403Component().add6403(1)).toBe(6404);
  });
});