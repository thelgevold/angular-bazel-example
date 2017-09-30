
import { Cmp6078Component } from './cmp';
describe('Cmp6078Component', () => {
  it('should add', () => {
    expect(new Cmp6078Component().add6078(1)).toBe(6079);
  });
});